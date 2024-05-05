import { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";
type textAreaProps = {
  name: string;
  label: string;
  formik: any;
  inputActions?: any;
  className?: string;
};
const TextArea = ({
  name,
  label,
  formik,
  className,
  inputActions,
}: textAreaProps) => {
  // console.log("formik.errors?.[name]", formik.values[name]);
  const handleChangeText = (text:string)=>{
    formik.handleChange({
      target: {
        name,
        value: text,
        // value: e.target.value.replace(/ /g, ""),
      },
    });
  }
  const editorRef = useRef<any>(null);
  return (
    <div
      className={`flex flex-col w-full items-start justify-start ${className}`}
    >
      <div className="text-sm mb-2 flex justify-between w-full">
        <label htmlFor={name}>{label}</label>
        {inputActions?.()}
      </div>

      <Editor
        onInit={(evt, editor) => (editorRef.current = editor)}
        // initialValue={formik.values?.[name] || ""}
        id={name}
        value={formik.values?.[name]}
        onEditorChange={handleChangeText}
        apiKey="ajj87dt2tkk9iay286x5uxdjdb685g4spq516y5lacgqlerz"
        init={{
          height: 150,
          width: "100%",
          menubar: false,
          // plugins: [
          //   "advlist autolink lists link image charmap print preview anchor",
          //   "code fullscreen",
          //   "media table paste code",
          // ],
          toolbar:
            "undo redo | formatselect | " +
            "bold italic backcolor | alignleft aligncenter " +
            "alignright alignjustify | bullist numlist outdent indent | " +
            "removeformat",
          content_style:
            "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
        }}
      />

      {formik.errors?.[name] && formik.touched?.[name] && (
        <p className="text-error-primary text-[10px] mt-1">
          {formik.errors?.[name]}
        </p>
      )}
    </div>
  );
};
export default TextArea;
