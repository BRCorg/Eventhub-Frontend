import { useState, type FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../store/store';
import { login } from '../core/usecases';

export const useLoginForm = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const submit = async (event: FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setError('');
    try {
      
      await dispatch(login({ email, password })).unwrap();
      navigate('/profile');
    } catch (err) {
      setError((err as Error).message); 
    } finally {
      setLoading(false);
    }
  };

  return { email, setEmail, password, setPassword, loading, error, submit };
};
