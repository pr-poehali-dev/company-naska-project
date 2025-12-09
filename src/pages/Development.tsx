import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Link } from "react-router-dom";

const Development = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="bg-gradient-to-br from-secondary/10 via-background to-primary/10 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-block">
              <span className="text-sm font-semibold text-secondary bg-secondary/10 px-4 py-2 rounded-full">
                Разработка ПО
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
              Современные решения <br />
              <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
                для вашего бизнеса
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Разрабатываем программное обеспечение, которое решает реальные задачи бизнеса
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Наши услуги</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="border-2 hover:border-secondary transition-all hover-scale">
              <CardContent className="p-6 space-y-4">
                <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center">
                  <Icon name="Globe" className="text-secondary" size={28} />
                </div>
                <h3 className="text-xl font-bold">Веб-приложения</h3>
                <p className="text-sm text-muted-foreground">
                  Разработка современных веб-сервисов и корпоративных порталов
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-secondary transition-all hover-scale">
              <CardContent className="p-6 space-y-4">
                <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center">
                  <Icon name="Smartphone" className="text-secondary" size={28} />
                </div>
                <h3 className="text-xl font-bold">Мобильные приложения</h3>
                <p className="text-sm text-muted-foreground">
                  Создание приложений для iOS и Android под задачи бизнеса
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-secondary transition-all hover-scale">
              <CardContent className="p-6 space-y-4">
                <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center">
                  <Icon name="Database" className="text-secondary" size={28} />
                </div>
                <h3 className="text-xl font-bold">Автоматизация</h3>
                <p className="text-sm text-muted-foreground">
                  Системы учета, CRM, ERP и другие бизнес-приложения
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-secondary transition-all hover-scale">
              <CardContent className="p-6 space-y-4">
                <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center">
                  <Icon name="ShoppingCart" className="text-secondary" size={28} />
                </div>
                <h3 className="text-xl font-bold">Интернет-магазины</h3>
                <p className="text-sm text-muted-foreground">
                  Полнофункциональные платформы электронной коммерции
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-secondary transition-all hover-scale">
              <CardContent className="p-6 space-y-4">
                <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center">
                  <Icon name="Zap" className="text-secondary" size={28} />
                </div>
                <h3 className="text-xl font-bold">Интеграции</h3>
                <p className="text-sm text-muted-foreground">
                  Подключение API, интеграция с внешними системами
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-secondary transition-all hover-scale">
              <CardContent className="p-6 space-y-4">
                <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center">
                  <Icon name="Settings" className="text-secondary" size={28} />
                </div>
                <h3 className="text-xl font-bold">Поддержка</h3>
                <p className="text-sm text-muted-foreground">
                  Техническая поддержка и развитие существующих систем
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gradient-to-r from-secondary/5 to-primary/5 rounded-3xl p-12">
            <h3 className="text-3xl font-bold mb-8 text-center">Этапы работы</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="space-y-3">
                <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center">
                  <span className="text-secondary font-bold text-xl">1</span>
                </div>
                <h4 className="font-semibold">Анализ задачи</h4>
                <p className="text-sm text-muted-foreground">Изучаем требования и формируем техническое задание</p>
              </div>
              <div className="space-y-3">
                <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center">
                  <span className="text-secondary font-bold text-xl">2</span>
                </div>
                <h4 className="font-semibold">Разработка</h4>
                <p className="text-sm text-muted-foreground">Создаем решение с применением современных технологий</p>
              </div>
              <div className="space-y-3">
                <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center">
                  <span className="text-secondary font-bold text-xl">3</span>
                </div>
                <h4 className="font-semibold">Тестирование</h4>
                <p className="text-sm text-muted-foreground">Проверяем качество и устраняем возможные ошибки</p>
              </div>
              <div className="space-y-3">
                <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center">
                  <span className="text-secondary font-bold text-xl">4</span>
                </div>
                <h4 className="font-semibold">Внедрение</h4>
                <p className="text-sm text-muted-foreground">Запускаем проект и обучаем сотрудников</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Наши технологии</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "React", icon: "Code2" },
              { name: "Node.js", icon: "Server" },
              { name: "Python", icon: "FileCode" },
              { name: "PostgreSQL", icon: "Database" },
              { name: "Docker", icon: "Package" },
              { name: "AWS", icon: "Cloud" },
              { name: "REST API", icon: "Zap" },
              { name: "Git", icon: "GitBranch" }
            ].map((tech, i) => (
              <Card key={i} className="hover-scale cursor-pointer">
                <CardContent className="p-4 flex flex-col items-center gap-2 text-center">
                  <Icon name={tech.icon as any} className="text-secondary" size={24} />
                  <span className="text-sm font-medium">{tech.name}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <Card className="max-w-4xl mx-auto border-2">
          <CardContent className="p-12 text-center space-y-6">
            <div className="w-20 h-20 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto">
              <Icon name="Laptop" className="text-secondary" size={36} />
            </div>
            <h2 className="text-3xl font-bold">Обсудим ваш проект?</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Расскажите о задаче, и мы предложим оптимальное решение с учетом ваших требований и бюджета
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

export default Development;
