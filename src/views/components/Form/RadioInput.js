export const RadioInput = ({ label, ...args }) => {
  return (
    <label>
      {label}
      <input type="radio" {...args} />
    </label>
  );
};
