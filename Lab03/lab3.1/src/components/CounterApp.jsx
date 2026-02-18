import StepCounter from "./StepCounter";

export default function CounterApp() {
  return (
    <div className="grid">
      {/* ВАЖНО: props (initialValue/step) задают старт и шаг, а состояние (count/history) живет внутри StepCounter */}
      <StepCounter title="Counter A" initialValue={0} step={1} />
      <StepCounter title="Counter B" initialValue={10} step={5} />
    </div>
  );
}