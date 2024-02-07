import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect } from 'react';
import { UseFormReturn, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { ObjectSchema } from 'yup';
import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHooks';
import { addBattle, editBattle } from '../../../store/rosterSlice';
import { CommanderBattle } from '../../../store/types';
import { BattleSelection } from './Battles';

const newBattle: CommanderBattle = {
  enemy: '',
  victoryPoints: 0,
  enemyVictoryPoints: 0,
  careerPointsGained: 0,
  date: new Date().toISOString().slice(0, 10).replace(/-/g, '-'),
};

const battleFormSchema: ObjectSchema<CommanderBattle> = yup.object({
  enemy: yup.string().required(),
  victoryPoints: yup.number().min(0).integer().required(),
  enemyVictoryPoints: yup.number().min(0).integer().required(),
  careerPointsGained: yup.number().integer().required(),
  date: yup.string().required(),
});

const useBattleForm = (
  battleSelection: BattleSelection | null,
  open: boolean,
  handleClose: () => void
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
): [UseFormReturn<CommanderBattle, any>, (battle: CommanderBattle) => void, string] => {
  const dispatch = useAppDispatch();
  const initialBattle = useAppSelector((state) =>
    battleSelection && state.roster.campaign
      ? state.roster.campaign.commanders[battleSelection.commanderIndex].battles[
          battleSelection.battleIndex
        ]
      : newBattle
  );

  const formContext = useForm<CommanderBattle>({
    resolver: yupResolver(battleFormSchema),
    defaultValues: { ...initialBattle },
  });
  const { reset } = formContext;

  useEffect(() => {
    if (open) {
      reset({ ...initialBattle });
    }
  }, [reset, open, initialBattle]);

  const title = battleSelection ? 'Edit Battle' : 'New Battle';

  const onSuccess = battleSelection
    ? (battle: CommanderBattle) => {
        dispatch(editBattle(battle, battleSelection));
        handleClose();
      }
    : (battle: CommanderBattle) => {
        dispatch(addBattle(battle));
        handleClose();
      };

  return [formContext, onSuccess, title];
};

export default useBattleForm;
