import { StoryBook, useControls, useCreateStore } from '@lobehub/ui';
import { LineChart, LineChartProps } from '@yuntijs/charts';

export default () => {
  const store = useCreateStore();
  const control: LineChartProps | any = useControls({}, { store });

  return (
    <StoryBook levaStore={store}>
      <LineChart {...control} />
    </StoryBook>
  );
};
