import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const summary = [
  { label: "Portfolio Value", value: "$0.00", helper: "Across all connected accounts" },
  { label: "Day P/L", value: "$0.00", helper: "Updated after ingesting broker CSVs" },
  { label: "YTD P/L", value: "$0.00", helper: "Calculated from normalized transactions" },
  { label: "Income (12 mo)", value: "$0.00", helper: "Dividends and distributions" }
];

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">
            Snapshot of consolidated holdings and recent portfolio performance.
          </p>
        </div>
        <Button className="gap-2" variant="secondary">
          View recent reports
          <ArrowUpRight className="h-4 w-4" />
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {summary.map((metric) => (
          <Card key={metric.label}>
            <CardHeader>
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {metric.label}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-semibold">{metric.value}</p>
              <CardDescription>{metric.helper}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Next steps</CardTitle>
          <CardDescription>
            Upload broker CSVs, verify cost basis calculations, and connect Supabase Auth.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-3 md:grid-cols-2">
            <div className="rounded-md border p-4">
              <h3 className="font-medium">CSV ingestion</h3>
              <p className="text-sm text-muted-foreground">
                Normalize RBC, CIBC, and IBKR statements into the transactions table.
              </p>
            </div>
            <div className="rounded-md border p-4">
              <h3 className="font-medium">Analytics</h3>
              <p className="text-sm text-muted-foreground">
                Calculate book cost, ACB, P/L, and time-weighted returns for reconciled holdings.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
