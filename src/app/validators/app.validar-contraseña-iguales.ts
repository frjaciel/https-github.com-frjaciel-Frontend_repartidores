import { FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';

export const validarContraseñaIguales: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
  const contraseña = control.get('password');
  const confirmarContraseña = control.get('Confpassword');

  return contraseña.value === confirmarContraseña.value ? null : { NoSonIguales: true };
};