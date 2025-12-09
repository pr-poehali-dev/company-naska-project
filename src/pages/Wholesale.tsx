import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Link } from "react-router-dom";

const Wholesale = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-block">
              <span className="text-sm font-semibold text-primary bg-primary/10 px-4 py-2 rounded-full">
                Оптовая торговля
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
              Надежные поставки <br />
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                для вашего бизнеса
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Обеспечиваем бесперебойные поставки товаров для юридических лиц с 2022 года
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Условия работы</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="border-2">
              <CardContent className="p-8 space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
                  <Icon name="CreditCard" className="text-primary" size={32} />
                </div>
                <h3 className="text-2xl font-bold">Полная предоплата</h3>
                <p className="text-muted-foreground">
                  Классическая схема работы с 100% предоплатой. Быстрая обработка заказов и отгрузка товара.
                </p>
                <ul className="space-y-2 pt-2">
                  <li className="flex items-start gap-2 text-sm">
                    <Icon name="Check" className="text-primary mt-0.5" size={18} />
                    <span>Оперативная обработка заявок</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <Icon name="Check" className="text-primary mt-0.5" size={18} />
                    <span>Гарантия качества товара</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <Icon name="Check" className="text-primary mt-0.5" size={18} />
                    <span>Прозрачное ценообразование</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-8 space-y-4">
                <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center">
                  <Icon name="Handshake" className="text-secondary" size={32} />
                </div>
                <h3 className="text-2xl font-bold">Товарный кредит</h3>
                <p className="text-muted-foreground">
                  Для постоянных партнеров предоставляем возможность работы с отсрочкой платежа.
                </p>
                <ul className="space-y-2 pt-2">
                  <li className="flex items-start gap-2 text-sm">
                    <Icon name="Check" className="text-secondary mt-0.5" size={18} />
                    <span>Индивидуальные условия</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <Icon name="Check" className="text-secondary mt-0.5" size={18} />
                    <span>Гибкие сроки оплаты</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <Icon name="Check" className="text-secondary mt-0.5" size={18} />
                    <span>Выгодные условия для постоянных клиентов</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-3xl p-12 text-center">
            <h3 className="text-3xl font-bold mb-4">Преимущества сотрудничества</h3>
            <div className="grid md:grid-cols-4 gap-6 mt-8">
              <div className="space-y-2">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mx-auto">
                  <Icon name="Trophy" className="text-primary" size={24} />
                </div>
                <h4 className="font-semibold">Опыт с 2022</h4>
                <p className="text-sm text-muted-foreground">Проверенная репутация</p>
              </div>
              <div className="space-y-2">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mx-auto">
                  <Icon name="Package" className="text-primary" size={24} />
                </div>
                <h4 className="font-semibold">Широкий ассортимент</h4>
                <p className="text-sm text-muted-foreground">Любые категории товаров</p>
              </div>
              <div className="space-y-2">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mx-auto">
                  <Icon name="Truck" className="text-primary" size={24} />
                </div>
                <h4 className="font-semibold">Логистика</h4>
                <p className="text-sm text-muted-foreground">Доставка по региону</p>
              </div>
              <div className="space-y-2">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mx-auto">
                  <Icon name="FileText" className="text-primary" size={24} />
                </div>
                <h4 className="font-semibold">Документы</h4>
                <p className="text-sm text-muted-foreground">Полный пакет документов</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <Card className="max-w-4xl mx-auto border-2">
          <CardContent className="p-12 text-center space-y-6">
            <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
              <Icon name="Phone" className="text-primary" size={36} />
            </div>
            <h2 className="text-3xl font-bold">Готовы начать сотрудничество?</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Свяжитесь с нами для обсуждения условий поставки и получения коммерческого предложения
            </p>
            <div className="flex gap-4 justify-center pt-4">
              <a href="tel:+79598902377">
                <Button size="lg" className="gap-2">
                  <Icon name="Phone" size={20} />
                  +7 (959) 890-23-77
                </Button>
              </a>
              <Link to="/contacts">
                <Button size="lg" variant="outline" className="gap-2">
                  <Icon name="Mail" size={20} />
                  Написать нам
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </section>

      <Footer />
    </div>
  );
};

export default Wholesale;
