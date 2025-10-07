import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const holdings = [
  { symbol: "SHOP", name: "Shopify Inc.", bookCost: "$0.00", marketValue: "$0.00", pl: "$0.00" },
  { symbol: "RY", name: "Royal Bank of Canada", bookCost: "$0.00", marketValue: "$0.00", pl: "$0.00" },
  { symbol: "CM", name: "Canadian Imperial Bank", bookCost: "$0.00", marketValue: "$0.00", pl: "$0.00" }
];

export default function PortfolioPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight">Portfolio</h1>
        <p className="text-muted-foreground">
          Consolidated view of positions, book cost, and unrealized performance.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Holdings</CardTitle>
          <CardDescription>
            Placeholder data until Supabase integration and ingestion pipelines land.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-border text-sm">
              <thead className="bg-muted/20">
                <tr>
                  <th className="px-4 py-2 text-left font-medium text-muted-foreground">Symbol</th>
                  <th className="px-4 py-2 text-left font-medium text-muted-foreground">Name</th>
                  <th className="px-4 py-2 text-right font-medium text-muted-foreground">Book Cost</th>
                  <th className="px-4 py-2 text-right font-medium text-muted-foreground">Market Value</th>
                  <th className="px-4 py-2 text-right font-medium text-muted-foreground">Unrealized P/L</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {holdings.map((position) => (
                  <tr key={position.symbol}>
                    <td className="px-4 py-2 font-medium">{position.symbol}</td>
                    <td className="px-4 py-2">{position.name}</td>
                    <td className="px-4 py-2 text-right">{position.bookCost}</td>
                    <td className="px-4 py-2 text-right">{position.marketValue}</td>
                    <td className="px-4 py-2 text-right">{position.pl}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
