import s from './demo.scss';
import DemoComponent from './demo-component';

new DemoComponent({
  unit: 'kg',
  values: [30, 31, 32, 33, 40, 41, 41.5, 46, 47, 48, 49, 50],
  currentValue: 40,
  precision: 1
});
