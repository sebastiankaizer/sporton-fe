"use client";

import CardWithHeader from "../ui/card-with-header";
import { CustomerInfo } from "@/app/hooks/use-cart-store";

type TOrderInformation = {
  formData?: CustomerInfo;
  setFormData: React.Dispatch<React.SetStateAction<CustomerInfo>>;
};

const OrderInformation = ({ formData, setFormData }: TOrderInformation) => {
  const safeFormData: CustomerInfo = formData ?? {
    customerName: "",
    customerContact: null,
    customerAddress: "",
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    if (name === "customerContact") {
      const num = value === "" ? null : Number(value);
      setFormData((prev) => ({ ...prev, customerContact: num }));
      return;
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <CardWithHeader title="Order Information">
      <div className="p-5">
        <div className="input-group">
          <label htmlFor="customerName">Full Name</label>
          <input
            type="text"
            placeholder="Type your full name"
            id="customerName"
            name="customerName"
            value={safeFormData.customerName}
            onChange={handleInputChange}
          />
        </div>

        <div className="input-group">
          <label htmlFor="customerContact">Whatsapp Number</label>
          <input
            type="number"
            placeholder="Type your whatsapp number"
            id="customerContact"
            name="customerContact"
            value={safeFormData.customerContact ?? ""}
            onChange={handleInputChange}
          />
        </div>

        <div className="input-group">
          <label htmlFor="customerAddress">Shipping Address</label>
          <textarea
            placeholder="Type your shipping address"
            id="customerAddress"
            name="customerAddress"
            rows={7}
            value={safeFormData.customerAddress}
            onChange={handleInputChange}
          />
        </div>
      </div>
    </CardWithHeader>
  );
};

export default OrderInformation;