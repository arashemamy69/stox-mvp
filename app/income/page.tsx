import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const timeline = [
  { month: "Jan", dividends: "$0.00" },
  { month: "Feb", dividends: "$0.00" },
  { month: "Mar", dividends: "$0.00" },
  { month: "Apr", dividends: "$0.00" }
];

export default function IncomePage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight">Income</h1>
        <p className="text-muted-foreground">
          Dividend history by month with future DRIP insights and payout cadence.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Dividend timeline</CardTitle>
          <CardDescription>
            Placeholder timeline until income aggregation is wired to Supabase.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
            {timeline.map((entry) => (
              <div key={entry.month} className="rounded-md border p-4">
                <h3 className="text-sm font-medium text-muted-foreground">{entry.month}</h3>
                <p className="text-xl font-semibold">{entry.dividends}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
