import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect } from 'react';
import { UseFormReturn, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { CommanderBattle } from '../../../store/types';

export const getInitialBattle = (initialBattle?: CommanderBattle): CommanderBattle =>
  initialBattle || {
    enemy: '',
    victoryPoints: 0,
    enemyVictoryPoints: 0,
    careerPointsGained: 0,
    date: new Date().toISOString().slice(0, 10).replace(/-/g, '-'),
  };

const battleFormSchema = yup.object({
  enemy: yup.string(),
  victoryPoints: yup.number().min(0).integer().required(),
  enemyVictoryPoints: yup.number().min(0).integer().required(),
  careerPointsGained: yup.number().integer().required(),
  date: yup.string(),
});

const useBattleForm = (
  onSubmit: (battle: CommanderBattle) => void,
  open: boolean,
  handleClose: () => void,
  initialBattle?: CommanderBattle
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
): [UseFormReturn<CommanderBattle, any>, (battle: CommanderBattle) => void] => {
  const formContext = useForm<CommanderBattle>({
    resolver: yupResolver(battleFormSchema),
    defaultValues: { ...getInitialBattle(initialBattle) },
  });
  const { reset } = formContext;

  useEffect(() => {
    if (open) {
      reset({ ...getInitialBattle(initialBattle) });
    }
  }, [reset, open, initialBattle]);

  const onSuccess = (battle: CommanderBattle) => {
    onSubmit(battle);
    handleClose();
  };

  return [formContext, onSuccess];
};

export default useBattleForm;
