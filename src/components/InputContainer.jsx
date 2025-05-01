import React from "react";

function InputContainer({
  name,
  placeholderText,
  required,
  type,
  value,
  setUserObj,
  label,
  errorObj,
  setErrorObj,
}) {
  function handleInputChange(e) {
    const { name, value } = e.target;

    if (name === "phoneNumber") {
      if (value === "" || /^[0-9+()-.\s]*$/.test(value)) {
        setErrorObj(prev => ({ ...prev, [name]: "" }));
        setUserObj(prev => ({ ...prev, [name]: value.trimStart() }));
      }
    } else {
      setUserObj(prev => ({ ...prev, [name]: value.trimStart() }));
      setErrorObj(prev => ({ ...prev, [name]: "" }));
    }
  }

  return (
    <div className="mb-6">
      <label htmlFor={name} className="block text-sm font-medium text-[#6c25ff] mb-1">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <input
        type={type}
        id={name}
        placeholder={placeholderText}
        className={`w-full px-4 py-3 border rounded-md text-sm placeholder-[#919191] outline-none transition-all ${
          errorObj[name] ? "border-red-500" : "border-[#cbcbcb] hover:border-[#6C25FF]"
        } focus:border-[#6C25FF] focus:ring-1 focus:ring-[#6C25FF]`}
        name={name}
        onChange={handleInputChange}
        value={value}
        required={required}
      />
      {errorObj[name] && (
        <p className="mt-1 text-xs text-red-500">
          {errorObj[name]}
        </p>
      )}
    </div>
  );
}

export default InputContainer;