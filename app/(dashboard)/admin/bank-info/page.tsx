"use client";

import { useState } from "react";
import { FiPlus } from "react-icons/fi";
import Button from "@/app/(landing)/components/ui/button";
import BankInfoList from "../../components/bank-info/bank-info-list";
import BankInfoModal from "../../components/bank-info/bank-info-modal";

const BankInfoManagement = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => setIsOpen(true);
  const handleCloseModal = () => setIsOpen(false);

  return (
    <main className="p-6">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-10">
        <div>
          <h1 className="font-bold text-2xl">Bank Info Management</h1>
          <p className="text-gray-500">
            Manage destination accounts for customer transfers.
          </p>
        </div>

        <Button 
          className="rounded-lg flex items-center gap-2" 
          onClick={handleOpenModal}
        >
          <FiPlus size={20} />
          Add Bank Account
        </Button>
      </div>

      {/* Content Section */}
      <section className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <BankInfoList />
      </section>

      {/* Modal Integration */}
      <BankInfoModal 
        isOpen={isOpen} 
        onClose={handleCloseModal} 
      />
    </main>
  );
};

export default BankInfoManagement;