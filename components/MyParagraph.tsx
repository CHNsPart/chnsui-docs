// @ts-nocheck
import { Paragraph } from "chnsui";
import 'chnsui/dist/styles.css'

export function MyParagraphOne() {

  return (
    <div className="flex flex-col gap-5 justify-center items-center w-full py-16 border border-white/20 rounded-lg">
        <Paragraph variant={"transparent"} colors="warning" badge={"warning"}>
        This is a warning message.
      </Paragraph>
      <Paragraph sizes="lg" align="center" decoration="lineThrough">
        This paragraph has large font size, centered text, and a line-through decoration.
      </Paragraph>
      </div>
  )
}

export function MyParagraphTwo() {

  return (
    <div className="flex flex-col gap-5 justify-center items-center w-full px-5 py-16 border border-white/20 rounded-lg">
         <Paragraph bg colors="secondary">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit voluptatem 
          incidunt deleniti modi voluptate, hic cumque adipisci eveniet error exercitationem,
          vitae voluptatum ducimus. Maiores enim totam aperiam explicabo a quae. Lorem ipsum
          dolor sit amet consectetur, adipisicing elit. Sit voluptatem incidunt deleniti modi 
          voluptate, hic cumque adipisci eveniet error exercitationem, vitae voluptatum ducimus.
          Maiores enim totam aperiam explicabo a quae.
      </Paragraph>


    <div className="w-full flex flex-row gap-5">
        <Paragraph colors="dark" variant={"transparent"} badge={"dark"}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum at consectetur. 
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum at consectetur.
        </Paragraph>
        <Paragraph colors="warning" badge={"warning"} variant={"transparent"}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum at consectetur.
        </Paragraph>
      </div>
      </div>
  )
}

