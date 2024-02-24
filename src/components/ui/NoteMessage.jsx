import Button from "./Button";

const NoteMessage = () => {
  return (
    <div className="flex flex-col">
      <textarea
        className="border rounded-md px-4 p-2 mt-2"
        placeholder="type here your note"
        name=""
        id=""
        cols="30"
        rows="10"
      ></textarea>
      <Button name="Save" />
    </div>
  );
};

export default NoteMessage;
