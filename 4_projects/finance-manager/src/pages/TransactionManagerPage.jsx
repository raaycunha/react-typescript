import { useState } from "react";
import TableFinance from "../components/Finance/TableFinance";
import TransactionManager from "../components/Finance/TransactionManager";
import { useFinanceContext } from "../context/FinanceContext";

const TransactionManagerPage = () => {
  const { 
    handleFinance, 
    handlePreview, 
    previewList, 
    currentFilter,
    handleRemove,
    itemEdit,
    handleEdit,
    handleClear,
  } = useFinanceContext()
  return (
    <div>
      <section className="container-form">
        <TransactionManager 
          addFinance={handleFinance} 
          newEdit={itemEdit}
        />
      </section>
      <section className="preview-container">
        <TableFinance
          onPreview={handlePreview}
          onFilter={currentFilter}
          tableList={previewList}
          onRemove={handleRemove}
          startEdit={handleEdit}
          onClean={handleClear}
        />
      </section>
    </div>
  )
}

export default TransactionManagerPage;
