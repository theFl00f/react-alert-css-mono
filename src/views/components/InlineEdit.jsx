import EditableLabel from "react-inline-editing";

export const InlineEdit = ({ text, saveText }) => {
  return (
    <>
      <EditableLabel
        text={text || "Click to edit"}
        onFocusOut={saveText}
        inputClassName="bg-transparent border border-indigo-300 border-solid max-w-full px-1"
      />
    </>
  );
};
