import { ArrowDownUpIcon } from "lucide-react";
import { Button } from "../_components/ui/button";
import { db } from "../_lib/prisma";
import { DataTable } from "../_components/ui/data-table";
import { transactioncolumns } from "./_columns";

const TransactionsPage = async () => {
  // acessar as transações do banco de dados
  // utilizando o prisma
  const transactions = await db.transaction.findMany({});
  return (
    <div className="space-y-24 p-6">
      {/* TITULO E BOTÃO */}
      <div className="flex w-full items-center justify-between">
        <h1 className="text-2xl font-bold">Transações</h1>
        <Button className="rounded-full font-bold">
          Adicionar transação
          <ArrowDownUpIcon />
        </Button>
      </div>
      <DataTable columns={transactioncolumns} data={transactions} />
    </div>
  );
};
export default TransactionsPage;
