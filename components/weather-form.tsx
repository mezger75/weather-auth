import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export const WeatherForm = ({
  handleAddEntry,
  newDate,
  setNewDate,
  newTemperature,
  setNewTemperature,
}: {
  handleAddEntry: (event: React.FormEvent<HTMLFormElement>) => void;
  newDate: string;
  setNewDate: (value: string) => void;
  newTemperature: number;
  setNewTemperature: (value: number) => void;
}) => {
  return (
    <form onSubmit={handleAddEntry} className="flex flex-col gap-4 self-center">
      <div className="w-full">
        <Input
          type="date"
          label="Date"
          htmlForId="date"
          name="date"
          value={newDate}
          onChange={(event) => setNewDate(event.target.value)}
        />
        <Input
          type="number"
          label="Temperature"
          htmlForId="temperature"
          name="temperature"
          value={newTemperature}
          onChange={(event) => setNewTemperature(Number(event.target.value))}
        />
      </div>
      <Button type="submit">Add Entry</Button>
    </form>
  );
};
