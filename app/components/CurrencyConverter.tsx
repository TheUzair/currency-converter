"use client";

import { useState, useEffect } from "react";
import { CheckIcon, ChevronsUpDownIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { currencies } from "@/data/currrency";

export default function CurrencyConverter() {
  const [amount, setAmount] = useState<number>(1);
  const [fromCurrency, setFromCurrency] = useState<string>("USD");
  const [toCurrency, setToCurrency] = useState<string>("INR");
  const [result, setResult] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [history, setHistory] = useState<
    { from: string; to: string; amount: number; result: number }[]
  >([]);

  const [openFrom, setOpenFrom] = useState(false);
  const [openTo, setOpenTo] = useState(false);

  useEffect(() => {
    setResult(null);
    setError(null);
  }, [fromCurrency, toCurrency, amount]);

  const handleConvert = async () => {
    if (!amount || amount <= 0) {
      setError("Please enter a valid amount.");
      return;
    }
    setError(null);
    setLoading(true);
    try {
      const res = await fetch(
        `https://api.frankfurter.app/latest?amount=${amount}&from=${fromCurrency}&to=${toCurrency}`
      );
      const data = await res.json();

      if (data.rates && data.rates[toCurrency]) {
        const converted = data.rates[toCurrency];
        setResult(converted);

        setHistory((prev) => {
          const newEntry = {
            from: fromCurrency,
            to: toCurrency,
            amount,
            result: converted,
          };
          const updated = [newEntry, ...prev];
          return updated.slice(0, 5);
        });
      } else {
        setError("Conversion failed. Please try again.");
        setResult(null);
      }
    } catch (err) {
      setError("Failed to fetch exchange rate. Try again later.");
      setResult(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto shadow-lg">
      <CardHeader>
        <CardTitle>Currency Converter</CardTitle>
        <CardDescription>
          Convert between multiple currencies in real-time
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <Input
          type="number"
          value={amount}
          onChange={(e) => setAmount(parseFloat(e.target.value))}
          placeholder="Enter amount"
        />

        <div className="flex gap-2">
          <Popover open={openFrom} onOpenChange={setOpenFrom}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                role="combobox"
                aria-expanded={openFrom}
                className="flex-1 justify-between"
              >
                {fromCurrency || "Select currency"}
                <ChevronsUpDownIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0">
              <Command>
                <CommandInput placeholder="Search currency..." />
                <CommandList>
                  <CommandEmpty>No currency found.</CommandEmpty>
                  <CommandGroup>
                    {currencies.map((cur) => (
                      <CommandItem
                        key={cur.code}
                        value={cur.code}
                        onSelect={() => {
                          setFromCurrency(cur.code);
                          setOpenFrom(false);
                        }}
                      >
                        <CheckIcon
                          className={cn(
                            "mr-2 h-4 w-4",
                            fromCurrency === cur.code ? "opacity-100" : "opacity-0"
                          )}
                        />
                        {cur.code} - {cur.name}
                      </CommandItem>
                    ))}
                  </CommandGroup>

                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>

          <Popover open={openTo} onOpenChange={setOpenTo}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                role="combobox"
                aria-expanded={openTo}
                className="flex-1 justify-between"
              >
                {toCurrency || "Select currency"}
                <ChevronsUpDownIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0">
              <Command>
                <CommandInput placeholder="Search currency..." />
                <CommandList>
                  <CommandEmpty>No currency found.</CommandEmpty>
                 <CommandGroup>
                  {currencies.map((cur) => (
                    <CommandItem
                      key={cur.code}
                      value={cur.code}
                      onSelect={() => {
                        setToCurrency(cur.code);
                        setOpenTo(false);
                      }}
                    >
                      <CheckIcon
                        className={cn(
                          "mr-2 h-4 w-4",
                          fromCurrency === cur.code ? "opacity-100" : "opacity-0"
                        )}
                      />
                      {cur.code} - {cur.name}
                    </CommandItem>
                  ))}
                </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
        </div>

        <Button onClick={handleConvert} disabled={loading}>
          {loading ? "Converting..." : "Convert"}
        </Button>

        {error && <p className="text-red-500">{error}</p>}

        {typeof result === "number" && !error && (
          <p className="text-lg font-semibold text-center">
            {amount} {fromCurrency} = {result.toFixed(2)} {toCurrency}
          </p>
        )}

        {history.length > 0 && (
          <div className="mt-4">
            <h2 className="text-lg font-semibold">Conversion History</h2>
            <ul className="mt-2 space-y-1 text-sm text-gray-700">
              {history.map((item, index) => (
                <li key={index} className="border-b py-1">
                  {item.amount} {item.from} → {item.result.toFixed(2)} {item.to}
                </li>
              ))}
            </ul>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
