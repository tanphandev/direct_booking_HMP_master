type Props = {
  name: string;
  email: string;
  phone: string;
  country: string;
};

function ContactInfo({ name, email, phone, country }: Props) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 bg-grey-f5 p-4 rounded-sm mb-4">
      <div className="py-2 pr-4">
        <p className="text-sm">Guest Name</p>
        <p className="text-base font-bold">{name}</p>
      </div>
      <div className="py-2 pr-4">
        <p className="text-sm">Email</p>
        <p className="text-base font-bold">{email}</p>
      </div>
      <div className="py-2 pr-4">
        <p className="text-sm">Phone number</p>
        <p className="text-base font-bold">{phone}</p>
      </div>
      <div className="py-2 pr-4">
        <p className="text-sm">Country</p>
        <p className="text-base font-bold">{country}</p>
      </div>
    </div>
  );
}

export default ContactInfo;
