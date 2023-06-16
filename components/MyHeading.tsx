import { Heading } from "chnsui";
import 'chnsui/dist/styles.css'

export default function MyHeading() {

  return (
    <div className="flex flex-col gap-5 justify-center items-center w-full py-16 border border-white/20 rounded-lg">
        <Heading 
            variant="h1" 
            colors="primary" 
            weight="bold" 
            align="center" 
            transform="uppercase" 
            decoration="noUnderline" 
            quickie="q_grad_watermelone x_bounce" 
            animations="x_wave" 
            sectionWidth="full"
        >
            Hello, world!
        </Heading>
      </div>
  )
}
