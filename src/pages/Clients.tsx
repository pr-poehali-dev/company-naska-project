import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const Clients = () => {
  const clients = [
    { 
      name: "ООО ЮГМК", 
      icon: "Building2",
      description: "Поставки материалов для металлургического комбината"
    },
    { 
      name: "ООО ЮГМК Донецк", 
      icon: "Factory",
      description: "Комплексные поставки производственного оборудования"
    },
    { 
      name: "ГУП ЛНР Востокуголь", 
      icon: "Fuel",
      description: "Снабжение угольного предприятия"
    },
    { 
      name: "ГУП ЛНР Почта ЛНР", 
      icon: "Mail",
      description: "Разработка системы учета отправлений"
    },
    { 
      name: "ГУП ЛНР РСК", 
      icon: "Building",
      description: "Поставки строительных материалов"
    },
    { 
      name: "ООО СПАР", 
      icon: "ShoppingBag",
      description: "Оптовые поставки для торговой сети"
    },
    { 
      name: "ООО Авто-восток", 
      icon: "Car",
      description: "Поставки автокомплектующих и расходников"
    },
    { 
      name: "ООО ТехноПром", 
      icon: "Cog",
      description: "Промышленное оборудование и запчасти"
    },
    { 
      name: "ООО СтройМастер", 
      icon: "HardHat",
      description: "Строительные материалы и инструменты"
    },
    { 
      name: "ООО АгроТех", 
      icon: "Wheat",
      description: "Сельскохозяйственное оборудование"
    },
    { 
      name: "ООО ЭнергоСервис", 
      icon: "Zap",
      description: "Электротехническое оборудование"
    },
    { 
      name: "ООО ТрансЛогистик", 
      icon: "Truck",
      description: "Логистические решения и поставки"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-block">
              <span className="text-sm font-semibold text-primary bg-primary/10 px-4 py-2 rounded-full">
                Наши клиенты
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
              Доверие <br />
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                крупнейших компаний
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Работаем с ведущими предприятиями региона, обеспечивая высокое качество продукции и услуг
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {clients.map((client, i) => (
              <Card key={i} className="hover-scale hover:border-primary transition-all duration-300 border-2">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon name={client.icon as any} className="text-primary" size={24} />
                    </div>
                    <h3 className="font-bold text-lg">{client.name}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{client.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          <Card className="border-2 bg-gradient-to-r from-primary/5 to-secondary/5">
            <CardContent className="p-12">
              <div className="text-center space-y-8">
                <h2 className="text-3xl font-bold">Цифры, которые говорят сами за себя</h2>
                <div className="grid md:grid-cols-4 gap-8">
                  <div className="space-y-2">
                    <div className="text-4xl font-bold text-primary">12+</div>
                    <div className="text-sm text-muted-foreground">Постоянных клиентов</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-4xl font-bold text-primary">2022</div>
                    <div className="text-sm text-muted-foreground">Год основания</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-4xl font-bold text-primary">100%</div>
                    <div className="text-sm text-muted-foreground">Выполненных заказов</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-4xl font-bold text-primary">24/7</div>
                    <div className="text-sm text-muted-foreground">Поддержка клиентов</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Почему клиенты выбирают нас</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6 space-y-3">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Icon name="Award" className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-bold">Проверенное качество</h3>
                <p className="text-sm text-muted-foreground">
                  Работаем только с сертифицированными поставщиками и гарантируем качество продукции
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 space-y-3">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Icon name="Clock" className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-bold">Соблюдение сроков</h3>
                <p className="text-sm text-muted-foreground">
                  Точное выполнение договорных обязательств и оперативная обработка заказов
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 space-y-3">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Icon name="Handshake" className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-bold">Индивидуальный подход</h3>
                <p className="text-sm text-muted-foreground">
                  Гибкие условия сотрудничества и персональный менеджер для каждого клиента
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 space-y-3">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Icon name="TrendingUp" className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-bold">Конкурентные цены</h3>
                <p className="text-sm text-muted-foreground">
                  Прямые контракты с производителями позволяют предлагать лучшие цены на рынке
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Clients;
