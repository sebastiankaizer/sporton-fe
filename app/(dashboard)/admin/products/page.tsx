"use client";

import { useState } from "react";
import { FiPlus } from "react-icons/fi";
import Button from "@/app/(landing)/components/ui/button";
import ProductTable from "../../components/products/product-table";
import ProductModal from "../../components/products/product-modal";

const ProductManagement = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => setIsOpen(true);
  const handleCloseModal = () => setIsOpen(false);

  return (
    <main className="p-6">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-10">
        <div>
          <h1 className="font-bold text-2xl text-gray-900">Product Management</h1>
          <p className="text-gray-500">
            Manage your inventory, prices and stock.
          </p>
        </div>

        <Button 
          className="rounded-lg flex items-center gap-2" 
          onClick={handleOpenModal}
        >
          <FiPlus size={20} />
          Add Product
        </Button>
      </div>

      {/* Content Section */}
      <section className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <ProductTable />
      </section>

      {/* Modal Integration */}
      <ProductModal 
        isOpen={isOpen} 
        onClose={handleCloseModal} 
      />
    </main>
  );
};

export default ProductManagement;