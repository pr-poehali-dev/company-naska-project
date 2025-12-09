import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const Contacts = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-block">
              <span className="text-sm font-semibold text-primary bg-primary/10 px-4 py-2 rounded-full">
                Контакты
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
              Свяжитесь <br />
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                с нами
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Мы всегда готовы ответить на ваши вопросы и обсудить возможности сотрудничества
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="border-2">
              <CardContent className="p-8 space-y-6">
                <h2 className="text-2xl font-bold mb-6">Контактная информация</h2>
                
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon name="Building2" className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Организация</h3>
                      <p className="text-sm text-muted-foreground">Название компании</p>
                      <p className="text-sm text-muted-foreground">Организационно-правовая форма</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon name="Phone" className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Телефон</h3>
                      <a href="tel:+7XXXXXXXXXX" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                        +7 (XXX) XXX-XX-XX
                      </a>
                      <p className="text-xs text-muted-foreground mt-1">Звонки принимаем с 9:00 до 18:00</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon name="Mail" className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <a href="mailto:info@example.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                        info@example.com
                      </a>
                      <p className="text-xs text-muted-foreground mt-1">Ответим в течение 24 часов</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon name="Clock" className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Режим работы</h3>
                      <p className="text-sm text-muted-foreground">Пн-Пт: 9:00 - 18:00</p>
                      <p className="text-sm text-muted-foreground">Сб-Вс: выходной</p>
                    </div>
                  </div>
                </div>

                <div className="pt-6 flex gap-3">
                  <a href="tel:+7XXXXXXXXXX" className="flex-1">
                    <Button className="w-full gap-2">
                      <Icon name="Phone" size={18} />
                      Позвонить
                    </Button>
                  </a>
                  <a href="mailto:info@example.com" className="flex-1">
                    <Button variant="outline" className="w-full gap-2">
                      <Icon name="Mail" size={18} />
                      Написать
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-8 space-y-6">
                <h2 className="text-2xl font-bold mb-6">Реквизиты организации</h2>
                
                <div className="space-y-4">
                  <div className="bg-muted/50 rounded-lg p-4 space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Полное наименование:</span>
                    </div>
                    <div className="font-semibold text-sm">
                      Полное наименование компании
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-muted/50 rounded-lg p-4">
                      <div className="text-xs text-muted-foreground mb-2">ИНН</div>
                      <div className="font-semibold">XXXXXXXXXX</div>
                    </div>
                    <div className="bg-muted/50 rounded-lg p-4">
                      <div className="text-xs text-muted-foreground mb-2">КПП</div>
                      <div className="font-semibold">XXXXXXXXX</div>
                    </div>
                  </div>

                  <div className="bg-muted/50 rounded-lg p-4">
                    <div className="text-xs text-muted-foreground mb-2">ОГРН</div>
                    <div className="font-semibold">XXXXXXXXXXXXX</div>
                  </div>

                  <div className="bg-muted/50 rounded-lg p-4">
                    <div className="text-xs text-muted-foreground mb-2">Расчетный счет</div>
                    <div className="font-semibold text-sm">XXXXXXXXXXXXXXXXXXXX</div>
                  </div>

                  <div className="bg-muted/50 rounded-lg p-4">
                    <div className="text-xs text-muted-foreground mb-2">БИК банка</div>
                    <div className="font-semibold">XXXXXXXXX</div>
                  </div>
                </div>

                <div className="pt-4">
                  <Button variant="outline" className="w-full gap-2">
                    <Icon name="Download" size={18} />
                    Скачать реквизиты (PDF)
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="border-2 bg-gradient-to-r from-primary/5 to-secondary/5">
            <CardContent className="p-12 text-center space-y-6">
              <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                <Icon name="MessageCircle" className="text-primary" size={36} />
              </div>
              <h2 className="text-3xl font-bold">Есть вопросы?</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Наша команда готова помочь вам с выбором продукции, оформлением заказа или разработкой индивидуального решения. 
                Свяжитесь с нами удобным для вас способом.
              </p>
              <div className="grid md:grid-cols-3 gap-6 pt-6 max-w-3xl mx-auto">
                <div className="space-y-2">
                  <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mx-auto">
                    <Icon name="Users" className="text-primary" size={24} />
                  </div>
                  <h3 className="font-semibold">Отдел продаж</h3>
                  <p className="text-sm text-muted-foreground">Консультации по оптовым поставкам</p>
                </div>
                <div className="space-y-2">
                  <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mx-auto">
                    <Icon name="Code2" className="text-primary" size={24} />
                  </div>
                  <h3 className="font-semibold">IT-отдел</h3>
                  <p className="text-sm text-muted-foreground">Вопросы по разработке ПО</p>
                </div>
                <div className="space-y-2">
                  <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mx-auto">
                    <Icon name="Headphones" className="text-primary" size={24} />
                  </div>
                  <h3 className="font-semibold">Поддержка</h3>
                  <p className="text-sm text-muted-foreground">Помощь действующим клиентам</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contacts;