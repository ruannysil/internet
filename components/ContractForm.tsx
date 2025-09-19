import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CheckCircle, Loader2, MapPin, Star } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

interface ContractFormProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPlan: string;
}

interface AddressData {
  street: string;
  neighborhood: string;
  city: string;
  state: string;
}

const ContractForm = ({ isOpen, onClose, selectedPlan }: ContractFormProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [addressData, setAddressData] = useState<AddressData | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone1: "",
    phone2: "",
    cep: "",
    number: "",
    complement: ""
  });

  const fetchAddress = async (cep: string) => {
    if (cep.length !== 8) return;

    setIsLoading(true);
    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data = await response.json();

      if (data.erro) {
        toast.error("CEP não encontrado");
        return;
      }

      setAddressData({
        street: data.logradouro,
        neighborhood: data.bairro,
        city: data.localidade,
        state: data.uf
      });

      toast.success("Endereço encontrado!");
    } catch (error) {
      toast.error("Erro ao buscar CEP");
    } finally {
      setIsLoading(false);
    }
  };

  const handleCepChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const cep = e.target.value.replace(/\D/g, "");
    setFormData({ ...formData, cep });

    if (cep.length === 8) {
      fetchAddress(cep);
    } else {
      setAddressData(null);
    }
  };

  const formatPhone = (value: string) => {
    const numbers = value.replace(/\D/g, "");
    if (numbers.length <= 10) {
      return numbers.replace(/(\d{2})(\d{4})(\d{4})/, "($1) $2-$3");
    }
    return numbers.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!addressData) {
      toast.error("Por favor, insira um CEP válido");
      return;
    }

    const whatsappMessage = `
 *NOVA CONTRATAÇÃO - ${selectedPlan}*

*Dados do Cliente:*
Nome: ${formData.name}
Email: ${formData.email}
Telefone 1: ${formData.phone1}
Telefone 2: ${formData.phone2}

*Endereço:*
CEP: ${formData.cep}
Rua: ${addressData.street}
Número: ${formData.number}
Complemento: ${formData.complement}
Bairro: ${addressData.neighborhood}
Cidade: ${addressData.city}
Estado: ${addressData.state}

*Plano Selecionado:* ${selectedPlan}
    `.trim();

    const whatsappNumber = "559881082203"; // Substitua pelo número real
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(whatsappUrl, "_blank");
    toast.success("Redirecionando para WhatsApp...");
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-primary">
            Contratar Plano {selectedPlan}
          </DialogTitle>
        </DialogHeader>

        <div>
          <h1 className="font-semibold text-lg mb-4">Vendedor(a)</h1>
          <div className="flex items-center gap-4 mb-6">
            <div className="relative">
              <Avatar className="w-16 h-16 border-4 border-primary/20 shadow-lg">
                <AvatarImage
                  src="/user.png"
                  alt="Maria Francisca"
                  className="object-cover"
                />
                <AvatarFallback className="bg-gradient-primary text-white text-xl font-bold">MF</AvatarFallback>
              </Avatar>
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-red-500 rounded-full border-2 border-white flex items-center justify-center">
                <CheckCircle className="w-4 h-4 text-white" />
              </div>
            </div>

            <div>
              <h4 className="font-bold text-foreground text-lg">Maria Francisca</h4>
              <p className="text-muted-foreground text-sm">Vendedora numero 1</p>
              <div className="flex items-center gap-1 mt-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Dados Pessoais</h3>

            <div className="flex flex-col gap-3">
              <Label htmlFor="name">Nome Completo *</Label>
              <Input
                id="name"
                required
                value={formData.name}
                className="py-7"
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Seu nome completo"
              />
            </div>

            <div className="flex flex-col gap-3">
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                required
                className="py-7"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="seu@email.com"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-3">
                <Label htmlFor="phone1">Telefone 1 *</Label>
                <Input
                  id="phone1"
                  required
                  className="py-7"
                  value={formData.phone1}
                  onChange={(e) => setFormData({ ...formData, phone1: formatPhone(e.target.value) })}
                  placeholder="(11) 99999-9999"
                  maxLength={15}
                />
              </div>
              <div className="flex flex-col gap-3">
                <Label htmlFor="phone2">Telefone 2</Label>
                <Input
                  id="phone2"
                  value={formData.phone2}
                  className="py-7"
                  onChange={(e) => setFormData({ ...formData, phone2: formatPhone(e.target.value) })}
                  placeholder="(11) 99999-9999"
                  maxLength={15}
                />
              </div>
            </div>
          </div>

          {/* Endereço */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Endereço de Instalação</h3>

            <div className="flex flex-col gap-3">
              <Label htmlFor="cep">CEP *</Label>
              <div className="relative">
                <Input
                  id="cep"
                  required
                  className="py-7"
                  value={formData.cep}
                  onChange={handleCepChange}
                  placeholder="00000000"
                  maxLength={8}
                />
                {isLoading && (
                  <Loader2 className="absolute right-3 top-3 w-4 h-4 animate-spin text-primary" />
                )}
              </div>
            </div>

            {addressData && (
              <div className="p-4 bg-secondary/50 rounded-lg border border-red-500/20">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-4 h-4 text-red-500" />
                  <span className="font-semibold text-sm">Endereço Encontrado:</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  {addressData.street}, {addressData.neighborhood} - {addressData.city}/{addressData.state}
                </p>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-3">
                <Label htmlFor="number">Número *</Label>
                <Input
                  id="number"
                  required
                  className="py-7"
                  value={formData.number}
                  onChange={(e) => setFormData({ ...formData, number: e.target.value })}
                  placeholder="123"
                />
              </div>
              <div className="flex flex-col gap-3">
                <Label htmlFor="complement">Complemento</Label>
                <Input
                  id="complement"
                  className="py-7"
                  value={formData.complement}
                  onChange={(e) => setFormData({ ...formData, complement: e.target.value })}
                  placeholder="Apt 101, Bloco A"
                />
              </div>
            </div>
          </div>

          <div className="flex gap-4 pt-4">
            <Button type="button" variant="outline" onClick={onClose} className="flex-1 p-7">
              Cancelar
            </Button>
            <Button
              type="submit"
              className="flex-1 bg-gradient-to-b hover:bg-red-500/90 bg-red-700 shadow-2xl p-7"
              disabled={!addressData}
            >
              Enviar para WhatsApp
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ContractForm;