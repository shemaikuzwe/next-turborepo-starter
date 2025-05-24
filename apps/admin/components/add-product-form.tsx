"use client"

import { z } from "zod";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@next-starter/ui/components/form"
import { Input } from "@next-starter/ui/components/input"
import { Textarea } from "@next-starter/ui/components/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@next-starter/ui/components/card"
import { Badge } from "@next-starter/ui/components/badge"
import { Switch } from "@next-starter/ui/components/switch"
import { Plus, Trash2 } from "lucide-react"
import { Button } from "@next-starter/ui/components/button"
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { AddProductFormValues, formSchema } from "@/lib/schema";
import { addProduct } from "@/lib/action";
import { toast } from "sonner"

export default function AddProductForm() {

  const form = useForm<AddProductFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      price: "",
      description: "",
      isPopular: false,
      features: [{ text: "" }],
    },
  })

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "features",
  })

  async function onSubmit(data: z.infer<typeof formSchema>) {
    await addProduct(data)
    toast.success("Product added successfully")
    // form.reset()
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Add New Product</CardTitle>
          <CardDescription>Create a new pricing plan or product offering for your customers.</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {/* Basic Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Basic Information</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Product Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter Product name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="price"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Price</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter Product price" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Description</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Enter Product description" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />


                <FormField
                  control={form.control}
                  name="isPopular"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                      <div className="space-y-0.5">
                        <FormLabel className="text-base">Popular Badge</FormLabel>
                        <FormDescription>Show a "Popular" badge on this product</FormDescription>
                      </div>
                      <FormControl>
                        <Switch checked={field.value} onCheckedChange={field.onChange} />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>

              {/* Features */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">Features</h3>
                  <Button type="button" variant="outline" size="sm" onClick={() => append({ text: "" })}>
                    <Plus className="h-4 w-4 mr-2" />
                    Add Feature
                  </Button>
                </div>

                <div className="space-y-3">
                  {fields.map((field, index) => (
                    <div key={field.id} className="flex gap-2">
                      <FormField
                        control={form.control}
                        name={`features.${index}.text`}
                        render={({ field }) => (
                          <FormItem className="flex-1">
                            <FormControl>
                              <Input placeholder="Feature" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      {fields.length > 1 && (
                        <Button type="button" variant="outline" size="sm" onClick={() => remove(index)}>
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Preview */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Preview</h3>
                <Card className="max-w-md">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 relative">
                      {form.watch("isPopular") && (
                        <Badge className="absolute -top-2 right-0 bg-blue-500">Popular</Badge>
                      )}
                      <h3 className="text-2xl font-bold">{form.watch("price") || "$0"}</h3>
                    </div>

                    <p className="mt-4 text-gray-600 text-sm">{form.watch("description") || "Product description"}</p>

                    <div className="mt-6">
                      <h4 className="text-sm font-medium">What&apos;s Included:</h4>
                      <ul className="mt-2 space-y-2">
                        {form.watch("features")?.map(
                          (feature, index) =>
                            feature.text && (
                              <li key={index} className="flex items-start gap-2 text-sm">
                                <div className="rounded-sm bg-blue-500 p-0.5 shrink-0 mt-0.5">
                                  <div className="h-3 w-3 text-white" />
                                </div>
                                <span className="text-gray-600">{feature.text}</span>
                              </li>
                            ),
                        )}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Button type="submit" className="w-full" size="lg">
                Create Product
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  )
}
