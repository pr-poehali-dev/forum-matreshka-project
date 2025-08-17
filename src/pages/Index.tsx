import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

const Index = () => {
  const forumSections = [
    {
      title: "🏠 Главная страница форума",
      description: "Добро пожаловать в Phoenix Mobile RP",
      topics: 156,
      posts: 2340,
      lastPost: "Новые правила сервера",
      lastUser: "Admin",
      icon: "Home"
    },
    {
      title: "📝 Регистрация новых игроков",
      description: "Создайте своего персонажа и начните приключение",
      topics: 89,
      posts: 445,
      lastPost: "Анкета на роль врача",
      lastUser: "DrMedic",
      icon: "UserPlus"
    },
    {
      title: "🌆 Игровые локации и сюжетные ветки",
      description: "Исследуйте город и участвуйте в захватывающих историях",
      topics: 234,
      posts: 5670,
      lastPost: "Ограбление банка на улице Центральной",
      lastUser: "Phantom",
      icon: "Map"
    },
    {
      title: "📋 Правила игры и форума",
      description: "Ознакомьтесь с правилами для комфортной игры",
      topics: 12,
      posts: 89,
      lastPost: "Обновление правил RP",
      lastUser: "Moderator",
      icon: "Book"
    }
  ];

  const onlineUsers = [
    { name: "Phoenix", status: "🔥 Администратор", avatar: "P" },
    { name: "Viper", status: "🚔 Полицейский", avatar: "V" },
    { name: "Shadow", status: "🏢 Бизнесмен", avatar: "S" },
    { name: "Angel", status: "🏥 Врач", avatar: "A" },
    { name: "Wolf", status: "🏃 Новичок", avatar: "W" }
  ];

  const recentPosts = [
    {
      title: "Новое обновление сервера v2.5",
      author: "Phoenix",
      time: "2 минуты назад",
      replies: 23,
      views: 156
    },
    {
      title: "Набор в полицейский департамент",
      author: "ChiefPolice",
      time: "15 минут назад", 
      replies: 8,
      views: 67
    },
    {
      title: "Открытие нового бизнеса в центре города",
      author: "BusinessMan",
      time: "1 час назад",
      replies: 12,
      views: 89
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center animate-phoenix-glow">
                <Icon name="Flame" size={24} className="text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Phoenix Mobile
                </h1>
                <p className="text-sm text-muted-foreground">Ролевой сервер нового поколения</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Icon name="Bell" size={16} className="mr-2" />
                Уведомления
              </Button>
              <Button className="phoenix-glow">
                <Icon name="LogIn" size={16} className="mr-2" />
                Войти
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* Welcome Banner */}
            <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Icon name="Rocket" size={24} className="text-primary" />
                  <span>Добро пожаловать в Phoenix Mobile RP!</span>
                </CardTitle>
                <CardDescription>
                  Самый захватывающий ролевой сервер с уникальными возможностями и дружелюбным сообществом
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Forum Sections */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold flex items-center space-x-2">
                <Icon name="MessageSquare" size={20} />
                <span>Разделы форума</span>
              </h2>
              
              {forumSections.map((section, index) => (
                <Card key={index} className="hover-scale transition-all duration-200 hover:border-primary/40">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                          <Icon name={section.icon as any} size={20} className="text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg">{section.title}</h3>
                          <p className="text-muted-foreground text-sm">{section.description}</p>
                          <div className="flex items-center space-x-4 mt-2">
                            <Badge variant="secondary" className="text-xs">
                              {section.topics} тем
                            </Badge>
                            <Badge variant="outline" className="text-xs">
                              {section.posts} сообщений
                            </Badge>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-sm">{section.lastPost}</p>
                        <p className="text-muted-foreground text-xs">от {section.lastUser}</p>
                        <Button variant="ghost" size="sm" className="mt-2">
                          <Icon name="ArrowRight" size={16} />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Recent Posts */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Icon name="Clock" size={20} />
                  <span>Последние сообщения</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentPosts.map((post, index) => (
                    <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/20 hover:bg-muted/40 transition-colors">
                      <div className="flex-1">
                        <h4 className="font-medium">{post.title}</h4>
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <span>от {post.author}</span>
                          <Separator orientation="vertical" className="h-4" />
                          <span>{post.time}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <Icon name="MessageCircle" size={14} />
                          <span>{post.replies}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Icon name="Eye" size={14} />
                          <span>{post.views}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Online Users */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Icon name="Users" size={20} className="text-green-500" />
                  <span>Онлайн</span>
                  <Badge variant="secondary">{onlineUsers.length}</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {onlineUsers.map((user, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <Avatar className="w-8 h-8">
                        <AvatarFallback className="bg-primary text-primary-foreground text-xs">
                          {user.avatar}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-sm truncate">{user.name}</p>
                        <p className="text-xs text-muted-foreground truncate">{user.status}</p>
                      </div>
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Registration */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Icon name="UserPlus" size={20} />
                  <span>Быстрая регистрация</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input placeholder="Никнейм" />
                <Input type="email" placeholder="Email" />
                <Input type="password" placeholder="Пароль" />
                <Textarea placeholder="Расскажите о своем персонаже..." rows={3} />
                <Button className="w-full phoenix-glow">
                  <Icon name="Rocket" size={16} className="mr-2" />
                  Начать игру
                </Button>
              </CardContent>
            </Card>

            {/* Server Stats */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Icon name="BarChart3" size={20} />
                  <span>Статистика сервера</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Игроков онлайн:</span>
                    <span className="font-medium text-green-500">127/200</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Всего игроков:</span>
                    <span className="font-medium">15,432</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Сообщений:</span>
                    <span className="font-medium">89,234</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Время работы:</span>
                    <span className="font-medium">24/7</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-card border-t border-border mt-12">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Flame" size={20} className="text-primary" />
              <span className="text-sm text-muted-foreground">
                © 2024 Phoenix Mobile RP. Все права защищены.
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                <Icon name="MessageCircle" size={16} className="mr-2" />
                Discord
              </Button>
              <Button variant="ghost" size="sm">
                <Icon name="Send" size={16} className="mr-2" />
                Telegram
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;