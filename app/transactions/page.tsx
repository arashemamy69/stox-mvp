import { Upload } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function TransactionsPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">Transactions</h1>
          <p className="text-muted-foreground">
            Import broker statements and monitor normalization progress.
          </p>
        </div>
        <Button variant="default" className="gap-2">
          <Upload className="h-4 w-4" />
          Upload CSV
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Ingestion roadmap</CardTitle>
          <CardDescription>
            Adapter development and Supabase storage integration are tracked in Milestone 1.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <ol className="space-y-2 text-sm text-muted-foreground">
            <li>• Parse RBC Direct Investing statements (baseline schema).</li>
            <li>• Extend parser for CIBC Investor's Edge exports.</li>
            <li>• Normalize IBKR flex queries for equities and options.</li>
            <li>• Map normalized transactions into Supabase via Edge Functions.</li>
          </ol>
        </CardContent>
      </Card>
    </div>
  );
}
