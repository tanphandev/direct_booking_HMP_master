function ContactInfo() {
  return (
    <div>
      <h3 className="font-bold mb-2 mt-6">Your Contact Information:</h3>
      <div className="grid grid-cols-2 bg-grey-f5 p-4 rounded-sm">
        <div className="py-2 px-4">
          <p className="text-sm">Guest Name</p>
          <p className="text-base font-bold">Tan</p>
        </div>
        <div className="py-2 px-4">
          <p className="text-sm">Email</p>
          <p className="text-base font-bold">tanphan@gmail.com</p>
        </div>
        <div className="py-2 px-4">
          <p className="text-sm">Phone number</p>
          <p className="text-base font-bold">+84 372287581</p>
        </div>
        <div className="py-2 px-4">
          <p className="text-sm">Country</p>
          <p className="text-base font-bold">Viet Nam</p>
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;
