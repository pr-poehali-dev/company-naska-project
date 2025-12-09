import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      <header className="container mx-auto px-4 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-white text-3xl font-bold">Н</span>
          </div>
          <div>
            <h1 className="text-2xl font-bold tracking-tight">ООО НАСКА</h1>
            <p className="text-xs text-muted-foreground">Технологии и торговля</p>
          </div>
        </div>
        <Button variant="outline" className="gap-2">
          <Icon name="Phone" size={18} />
          Связаться
        </Button>
      </header>

      <section className="container mx-auto px-4 py-20 text-center animate-fade-in">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="inline-block">
            <span className="text-sm font-semibold text-primary bg-primary/10 px-4 py-2 rounded-full">
              Надежный партнер для вашего бизнеса
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight">
            Оптовые поставки <br />
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              и IT-решения
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Мы обеспечиваем бесперебойные поставки для юридических лиц и создаем современное программное обеспечение для вашего бизнеса
          </p>
          <div className="flex gap-4 justify-center pt-4">
            <Button size="lg" className="gap-2 hover-scale">
              <Icon name="ShoppingCart" size={20} />
              Оптовая торговля
            </Button>
            <Button size="lg" variant="outline" className="gap-2 hover-scale">
              <Icon name="Code2" size={20} />
              Разработка ПО
            </Button>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Card className="overflow-hidden border-2 hover:border-primary transition-all duration-300 hover-scale animate-slide-up">
            <CardContent className="p-8 space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
                <Icon name="Package" className="text-primary" size={32} />
              </div>
              <h3 className="text-2xl font-bold">Оптовая торговля</h3>
              <p className="text-muted-foreground leading-relaxed">
                Поставки товаров для юридических лиц с 2022 года. Работаем на условиях полной предоплаты или товарного кредита.
              </p>
              <div className="space-y-3 pt-4">
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle2" className="text-primary mt-1" size={20} />
                  <span className="text-sm">Надежные поставки</span>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle2" className="text-primary mt-1" size={20} />
                  <span className="text-sm">Гибкие условия оплаты</span>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle2" className="text-primary mt-1" size={20} />
                  <span className="text-sm">Опытный исполнительный директор</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="overflow-hidden border-2 hover:border-secondary transition-all duration-300 hover-scale animate-slide-up" style={{ animationDelay: "0.1s" }}>
            <CardContent className="p-8 space-y-4">
              <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center">
                <Icon name="Laptop" className="text-secondary" size={32} />
              </div>
              <h3 className="text-2xl font-bold">Разработка ПО</h3>
              <p className="text-muted-foreground leading-relaxed">
                Создаем программное обеспечение для местных компаний. Команда профессиональных разработчиков и менеджеров.
              </p>
              <div className="space-y-3 pt-4">
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle2" className="text-secondary mt-1" size={20} />
                  <span className="text-sm">Индивидуальный подход</span>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle2" className="text-secondary mt-1" size={20} />
                  <span className="text-sm">Современные технологии</span>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle2" className="text-secondary mt-1" size={20} />
                  <span className="text-sm">Гибкая команда экспертов</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-3xl my-16">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-4">Наши клиенты</h3>
          <p className="text-muted-foreground">Доверие крупнейших компаний региона</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {[
            { name: "ООО ЮГМК", icon: "Building2" },
            { name: "ООО ЮГМК Донецк", icon: "Factory" },
            { name: "ГУП ЛНР Востокуголь", icon: "Fuel" },
            { name: "ГУП ЛНР Почта ЛНР", icon: "Mail" },
            { name: "ГУП ЛНР РСК", icon: "Building" },
            { name: "ООО СПАР", icon: "ShoppingBag" },
            { name: "ООО Авто-восток", icon: "Car" },
            { name: "И другие", icon: "Users" }
          ].map((client, i) => (
            <Card key={i} className="hover-scale cursor-pointer">
              <CardContent className="p-6 flex flex-col items-center justify-center gap-3 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center">
                  <Icon name={client.icon as any} className="text-primary" size={24} />
                </div>
                <span className="text-sm font-medium">{client.name}</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <Card className="max-w-4xl mx-auto border-2">
          <CardContent className="p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-6">Контактная информация</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Icon name="Building2" className="text-primary mt-1" size={20} />
                      <div>
                        <p className="font-semibold">ООО "НАСКА"</p>
                        <p className="text-sm text-muted-foreground">Общество с ограниченной ответственностью</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="Phone" className="text-primary mt-1" size={20} />
                      <div>
                        <p className="font-semibold">Телефон</p>
                        <p className="text-sm text-muted-foreground">+7 (959) 890-23-77</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="Mail" className="text-primary mt-1" size={20} />
                      <div>
                        <p className="font-semibold">Email</p>
                        <p className="text-sm text-muted-foreground">info@nasca.example</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-bold mb-6">Реквизиты</h3>
                <div className="bg-muted/50 rounded-lg p-6 space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">ИНН:</span>
                    <span className="font-semibold">9102045671</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">КПП:</span>
                    <span className="font-semibold">910201001</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">ОГРН:</span>
                    <span className="font-semibold">1229100012847</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Расчетный счет:</span>
                    <span className="font-semibold">40702810538000123456</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">БИК:</span>
                    <span className="font-semibold">044525225</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <footer className="container mx-auto px-4 py-12 border-t mt-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <div>
            <h4 className="font-bold mb-4">ООО НАСКА</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Надежный партнер в области оптовых поставок и разработки программного обеспечения
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Направления</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Icon name="ChevronRight" size={16} className="text-primary" />
                Оптовая торговля
              </li>
              <li className="flex items-center gap-2">
                <Icon name="ChevronRight" size={16} className="text-primary" />
                Разработка ПО
              </li>
              <li className="flex items-center gap-2">
                <Icon name="ChevronRight" size={16} className="text-primary" />
                Консалтинг
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Свяжитесь с нами</h4>
            <Button className="w-full gap-2" size="lg">
              <Icon name="MessageCircle" size={18} />
              Написать нам
            </Button>
          </div>
        </div>
        <div className="text-center text-sm text-muted-foreground mt-12 pt-8 border-t">
          © {new Date().getFullYear()} ООО "НАСКА". Все права защищены.
        </div>
      </footer>
    </div>
  );
};

export default Index;