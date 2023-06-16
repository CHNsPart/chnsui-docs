// Example from https://beta.reactjs.org/learn
import { Button } from "chnsui";
import 'chnsui/dist/styles.css'

export default function MyButton() {

  return (
    <div className="flex flex-col gap-5 justify-center items-center w-full py-16 border border-white/20 rounded-lg">
      <div className="flex gap-5">
      <Button variant="default">Default Button</Button>
      <Button variant="destructive">Destructive Button</Button>
      <Button variant="outline">Outline Button</Button>
      </div>
      <div className="flex gap-5">
      <Button variant="subtle">Subtle Button</Button>
      <Button variant="ghost">Ghost Button</Button>
      <Button variant="link" href="https://google.com" target="_blank">
        Link Button
      </Button>
      </div>
      <Button variant="withRing">Button with Ring</Button>
    <div className="flex justify-center items-center gap-5">
      <Button size="sm">Small Button</Button>
      <Button size="lg">Large Button</Button>
      <Button className="bg-yellow-500">Custom Class Button</Button>
      <Button disabled>Disabled Button</Button>
      </div>
    </div>
  )
}
