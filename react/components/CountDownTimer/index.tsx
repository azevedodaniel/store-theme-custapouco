import Countdown, { CountdownRendererFn } from "react-countdown"

interface CountDownTimerProps {
  targetDate: string
}

import s from "./styles.module.css"

export default function CountDownTimer({ targetDate }: CountDownTimerProps) {
  if(!targetDate || targetDate === "") return null

  const date = new Date(targetDate);

  return (
    <Countdown autoStart date={date} renderer={Renderer} />
  )
}

// react/Countdown.tsx
CountDownTimer.schema = {
  title: 'CountDown Timer',
  description: 'Cronômetro',
  type: 'object',
  properties: {
    targetDate: {
      title: 'Data final',
      description: 'Data final utilizada no contador',
      type: 'string',
      default: null,
    },
  },
}

const Renderer: CountdownRendererFn = ({days, hours, minutes, seconds, completed}) => {
  if(completed) {
    return null
  }

  return (
    <div className={s['clock-container']}>
      {days > 0 && (
        <div className={s['clock-days']}>
          <p>{days}</p>
          <p>Dias</p>
        </div>
      )}
      <div className={s['clock-hours']}>
        <p>{hours}</p>
        <p>Horas</p>
      </div>
      <div className={s['clock-minutes']}>
        <p>{minutes}</p>
        <p>Minutos</p>
      </div>
      <div className={s['clock-seconds']}>
        <p>{seconds}</p>
        <p>Segundos</p>
      </div>
    </div>
  )
} 