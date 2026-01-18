"use client";

import { useState } from "react";
import { FiPlus } from "react-icons/fi";
import Button from "@/app/(landing)/components/ui/button";
import TransactionTable from "../../components/transactions/transaction-table";
import TransactionModal from "../../components/transactions/transaction-modal";

const TransactionManagement = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <main className="p-6">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-10">
        <div>
          <h1 className="font-bold text-2xl text-gray-900">
            Transaction Management
          </h1>
          <p className="text-gray-500">
            Verify incoming payments and manage order statuses.
          </p>
        </div>
        
        {/* Button tetap dipertahankan sesuai permintaan */}
        <Button className="rounded-lg flex items-center gap-2" onClick={() => {}}>
          <FiPlus size={20} />
          Create Transaction
        </Button>
      </div>

      {/* Content Section */}
      <section className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <TransactionTable onViewDetails={handleOpenModal} />
      </section>

      {/* Detail Modal */}
      <TransactionModal 
        isOpen={isOpen} 
        onClose={handleCloseModal} 
      />
    </main>
  );
};

export default TransactionManagement;