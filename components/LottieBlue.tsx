import { useLottie } from "lottie-react";
import blues from "../pages/public/blues.json"

export default function LottieBlue() {

  const options = {
    animationData: blues,
    loop: true
  };

  const { View } = useLottie(options);

  return <>{View}</>
}
