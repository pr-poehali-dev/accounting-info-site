import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Award, BookOpen, Heart, Target } from "lucide-react";

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1">
        {/* Header Section */}
        <section className="w-full py-12 md:py-24 bg-gradient-to-b from-primary/10 to-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  О нашем проекте
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Узнайте больше о том, кто мы и какие цели преследуем в нашем информационном проекте о бухгалтерии
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* About Project Section */}
        <section className="w-full py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl font-bold tracking-tight mb-4">История создания проекта</h2>
                <p className="mb-4">
                  Проект "Бухгалтерия.Инфо" начался как инициатива группы экспертов в области финансов. 
                  Мы столкнулись с тем, что многие люди имеют лишь поверхностное представление 
                  о бухгалтерии и её роли в бизнесе.
                </p>
                <p className="mb-4">
                  Нашей задачей стало создание доступного и информативного ресурса, который бы раскрывал 
                  сущность бухгалтерской работы, её значимость и современные аспекты. Мы поставили перед 
                  собой цель разработать информационный портал, который будет интересен как профессионалам 
                  в сфере бухгалтерии, так и людям без специального образования.
                </p>
                <p>
                  В процессе работы над проектом мы не только систематизировали теоретические знания, 
                  но и получили практический опыт в создании веб-ресурсов, работе с современными 
                  технологиями и командной разработке.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Card className="bg-accent/50">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <Target className="h-10 w-10 text-primary mb-4" />
                    <h3 className="text-lg font-medium mb-2">Наша цель</h3>
                    <p>Создать доступный образовательный ресурс о бухгалтерии</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-accent/50">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <Heart className="h-10 w-10 text-primary mb-4" />
                    <h3 className="text-lg font-medium mb-2">Наши ценности</h3>
                    <p>Точность, доступность информации и образовательная ценность</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-accent/50">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <BookOpen className="h-10 w-10 text-primary mb-4" />
                    <h3 className="text-lg font-medium mb-2">Наш подход</h3>
                    <p>Сочетание теории и практики, доступное изложение сложных концепций</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-accent/50">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <Award className="h-10 w-10 text-primary mb-4" />
                    <h3 className="text-lg font-medium mb-2">Наши достижения</h3>
                    <p>Создание информативного и структурированного ресурса о бухгалтерии</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
        
        {/* Team Section */}
        <section className="w-full py-12 md:py-16 bg-secondary/30">
          <div className="container px-4 md:px-6">
            <div className="mb-10 text-center">
              <h2 className="text-2xl font-bold tracking-tight mb-4">Наша команда</h2>
              <p className="max-w-3xl mx-auto text-muted-foreground">
                Над проектом работают профессионалы с разнообразными навыками и интересами, 
                объединенные желанием создать полезный образовательный ресурс
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden">
                    <img 
                      src="https://cdn.poehali.dev/files/97968508-8c02-45e4-a490-293b45651c91.jpg" 
                      alt="Моргунов Максим" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-medium mb-1">Моргунов Максим</h3>
                  <p className="text-sm text-muted-foreground mb-3">Руководитель проекта</p>
                  <p className="text-sm">
                    Координирует работу команды и отвечает за 
                    содержание проекта и стратегическое развитие.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden">
                    <img 
                      src="https://cdn.poehali.dev/files/ba7a6b3a-b92b-43f6-a187-2b33e0efd619.jpg" 
                      alt="Джавид Аббасов" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-medium mb-1">Джавид Аббасов</h3>
                  <p className="text-sm text-muted-foreground mb-3">Дизайнер</p>
                  <p className="text-sm">
                    Отвечает за визуальное оформление и 
                    пользовательский интерфейс проекта.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;