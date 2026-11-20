import { useState, type FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../store/store';
import { canSubmitRegister } from '../core/register-form';
import { register } from '../core/usecases';
import type { RegisterInput } from '../core/user';

export const useRegisterForm = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [form, setForm] = useState<RegisterInput>({ name: '', email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const updateField = (field: keyof RegisterInput, value: string) => {
    setForm({ ...form, [field]: value });
  };

  const submit = async (event: FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setError('');
    try {
      await dispatch(register(form)).unwrap();
      navigate('/profile');
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return { form, updateField, canSubmit: canSubmitRegister(form), loading, error, submit };
};
