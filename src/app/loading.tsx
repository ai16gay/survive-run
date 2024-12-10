import { Loader2 } from 'lucide-react';

const loading = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <Loader2 size={25} className="animate-spin" />
    </div>
  );
};

export default loading;
