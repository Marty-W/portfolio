const FormLoadingSkeleton = () => {
  return (
    <div className="container mx-auto px-4 md:px-0 max-w-3xl mb-5 animate-pulse space-y-3">
      <div className="h-6 rounded-lg bg-slate-200" />
      <div className="h-6 rounded-lg bg-slate-200" />
      <div className="h-6 rounded-lg bg-slate-200" />
      <div className="h-3 rounded-lg bg-slate-200 w-1/3 mx-auto" />
    </div>
  )
}

export default FormLoadingSkeleton
