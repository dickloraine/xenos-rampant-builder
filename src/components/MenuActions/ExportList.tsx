import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import ShareIcon from '@mui/icons-material/Share';
import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { showFeedback } from '../../store/appStateSlice';
import { getTotalPoints } from '../../store/rosterSlice';
import copyToClipboard from '../../utils/copyToClipboard';
import ListDialog from '../ListDialog';
import { packRoster } from '../Roster';
import MenuAction from './MenuAction';

const ExportList: React.FC<{ onClose?: () => void; showText?: boolean }> = ({
  onClose,
  showText,
}) => {
  const dispatch = useAppDispatch();
  const roster = useAppSelector((state) => state.roster);
  const units = useAppSelector((state) => state.roster.units);
  const getImportableString = () => JSON.stringify(packRoster(roster));
  const armyCost = getTotalPoints(units);

  const getListAsText = () => {
    const text: string[] = [];
    text.push(`${roster.name} @${armyCost} points`);
    text.push('=====================================');
    for (const unit of Object.values(roster.units)) {
      text.push('');
      text.push(
        `${unit.customName ? unit.customName + ' (' + unit.name + ')' : unit.name} @${
          unit.points
        } points`
      );

      const options = [...unit.options, ...unit.xenosRules];
      if (options.length) {
        for (const option of options) text.push(`  - ${option}`);
      }
    }
    text.push('');
    return text.join('\n');
  };

  const getListAsMarkdown = () => {
    const text: string[] = [];
    text.push(`**${roster.name} --- ${armyCost} points**`);
    for (const unit of Object.values(roster.units)) {
      text.push('');
      text.push(
        `* ${
          unit.customName ? unit.customName + ' (' + unit.name + ')' : unit.name
        } -- ${unit.points} points`
      );

      const options = [...unit.options, ...unit.xenosRules];
      if (options.length) {
        text.push('');
        for (const option of options) text.push(`    - ${option}`);
      }
    }
    text.push('');
    return text.join('\n');
  };

  const options: [string, JSX.Element][] = [
    ['As an importable String', <ArrowDownwardIcon />],
    ['As text', <FormatAlignLeftIcon />],
    ['As markdown text', <FormatAlignJustifyIcon />],
  ];

  const funcs = [getImportableString, getListAsText, getListAsMarkdown];

  const exportList = (text: string) => {
    const exportFunc: () => string =
      funcs[options.reduce((acc, opt, i) => (opt[0] === text ? i : acc), 0)];

    try {
      const list = exportFunc();
      copyToClipboard(list);
      dispatch(showFeedback('List copied to clipboard!', 'success'));
    } catch (err) {
      dispatch(showFeedback('Could not export the list!', 'error'));
    }
  };

  return (
    <ListDialog
      action={exportList}
      anchor={<MenuAction text={'Export'} icon={<ShareIcon />} showText={showText} />}
      options={options}
      title="Chose how to export"
      onClose={onClose}
    />
  );
};

export default React.memo(ExportList);
