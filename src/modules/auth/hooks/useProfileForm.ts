import { useState, type FormEvent } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { updateProfile } from '../core/usecases';

export const useProfileForm = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.auth.user);
  const [name, setName] = useState(user?.name ?? '');
  const [email, setEmail] = useState(user?.email ?? '');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const submit = async (event: FormEvent) => {
    event.preventDefault();
    if (!user) return;
    setLoading(true);
    setError('');
    setSuccess(false);
    try {
      await dispatch(updateProfile({ ...user, name, email })).unwrap();
      setSuccess(true);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return { user, name, setName, email, setEmail, loading, error, success, submit };
};
