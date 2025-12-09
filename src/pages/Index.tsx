import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      <Header />
      
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
            <Link to="/wholesale">
              <Button size="lg" className="gap-2 hover-scale">
                <Icon name="ShoppingCart" size={20} />
                Оптовая торговля
              </Button>
            </Link>
            <Link to="/development">
              <Button size="lg" variant="outline" className="gap-2 hover-scale">
                <Icon name="Code2" size={20} />
                Разработка ПО
              </Button>
            </Link>
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
              <Link to="/wholesale">
                <Button className="w-full mt-4">Подробнее</Button>
              </Link>
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
              <Link to="/development">
                <Button className="w-full mt-4" variant="outline">Подробнее</Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-4">Почему выбирают нас</h3>
          <p className="text-muted-foreground">Преимущества работы с ООО НАСКА</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <Card className="hover-scale">
            <CardContent className="p-6 text-center space-y-3">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto">
                <Icon name="Shield" className="text-primary" size={28} />
              </div>
              <h4 className="font-semibold text-lg">Надежность</h4>
              <p className="text-sm text-muted-foreground">Работаем с крупнейшими предприятиями региона</p>
            </CardContent>
          </Card>
          <Card className="hover-scale">
            <CardContent className="p-6 text-center space-y-3">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto">
                <Icon name="Clock" className="text-primary" size={28} />
              </div>
              <h4 className="font-semibold text-lg">Оперативность</h4>
              <p className="text-sm text-muted-foreground">Быстрая обработка заказов и выполнение работ</p>
            </CardContent>
          </Card>
          <Card className="hover-scale">
            <CardContent className="p-6 text-center space-y-3">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto">
                <Icon name="Users" className="text-primary" size={28} />
              </div>
              <h4 className="font-semibold text-lg">Профессионализм</h4>
              <p className="text-sm text-muted-foreground">Опытная команда специалистов</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
