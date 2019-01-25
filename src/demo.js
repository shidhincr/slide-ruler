import s from './demo.scss';
import DemoComponent from './demo-component';

new DemoComponent({
  unit: 'kg',
  maxValue: 50,
  minValue: 30,
  currentValue: 40,
  precision: 0.5
});
