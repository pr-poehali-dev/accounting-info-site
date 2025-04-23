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
                  Проект "Бухгалтерия.Инфо" начался как учебная инициатива группы студентов в рамках курса 
                  информатики. Мы столкнулись с тем, что многие люди имеют лишь поверхностное представление 
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
                Над проектом работали студенты с разнообразными навыками и интересами, 
                объединенные желанием создать полезный образовательный ресурс
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-24 h-24 rounded-full bg-primary/20 mx-auto mb-4 flex items-center justify-center">
                    <span className="text-3xl">👩‍💻</span>
                  </div>
                  <h3 className="text-lg font-medium mb-1">Анна Иванова</h3>
                  <p className="text-sm text-muted-foreground mb-3">Руководитель проекта</p>
                  <p className="text-sm">
                    Студентка 4 курса экономического факультета, 
                    координировала работу команды и отвечала за содержание проекта.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-24 h-24 rounded-full bg-primary/20 mx-auto mb-4 flex items-center justify-center">
                    <span className="text-3xl">👨‍💼</span>
                  </div>
                  <h3 className="text-lg font-medium mb-1">Дмитрий Петров</h3>
                  <p className="text-sm text-muted-foreground mb-3">Эксперт по бухгалтерии</p>
                  <p className="text-sm">
                    Студент 3 курса финансового факультета, отвечал 
                    за точность и актуальность информации о бухгалтерии.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-24 h-24 rounded-full bg-primary/20 mx-auto mb-4 flex items-center justify-center">
                    <span className="text-3xl">👩‍🎨</span>
                  </div>
                  <h3 className="text-lg font-medium mb-1">Мария Сидорова</h3>
                  <p className="text-sm text-muted-foreground mb-3">Веб-разработчик</p>
                  <p className="text-sm">
                    Студентка факультета информатики, занималась 
                    разработкой технической части проекта.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-24 h-24 rounded-full bg-primary/20 mx-auto mb-4 flex items-center justify-center">
                    <span className="text-3xl">👨‍🎨</span>
                  </div>
                  <h3 className="text-lg font-medium mb-1">Алексей Смирнов</h3>
                  <p className="text-sm text-muted-foreground mb-3">Дизайнер</p>
                  <p className="text-sm">
                    Студент факультета дизайна, отвечал за 
                    визуальное оформление и пользовательский интерфейс.
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