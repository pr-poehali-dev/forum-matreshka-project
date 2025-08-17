import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  const handleLogin = () => {
    if (username === "Finn_Maestrovich" && password === "29092011") {
      setIsLoggedIn(true);
      setLoginError("");
    } else {
      setLoginError("Неверный логин или пароль");
    }
  };

  const forumStats = {
    totalUsers: 15432,
    onlineUsers: 127,
    totalPosts: 89234,
    totalThreads: 12456,
    todayRegistrations: 23,
    todayPosts: 445
  };

  const recentUsers = [
    { name: "Phoenix_Rider", role: "Администратор", lastSeen: "В сети", status: "online" },
    { name: "Viper_Snake", role: "Модератор", lastSeen: "5 мин назад", status: "away" },
    { name: "Shadow_Walker", role: "Игрок", lastSeen: "15 мин назад", status: "offline" },
    { name: "Angel_Wings", role: "VIP", lastSeen: "1 час назад", status: "offline" }
  ];

  const recentReports = [
    { id: 1, type: "Спам", reporter: "UserReport1", target: "SpamBot", status: "Новый" },
    { id: 2, type: "Оскорбления", reporter: "UserReport2", target: "ToxicUser", status: "В работе" },
    { id: 3, type: "Читы", reporter: "UserReport3", target: "Cheater123", status: "Решено" }
  ];

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mx-auto mb-4 animate-phoenix-glow">
              <Icon name="Shield" size={32} className="text-primary-foreground" />
            </div>
            <CardTitle className="text-2xl">Админ-панель</CardTitle>
            <CardDescription>Phoenix Mobile RP - Панель управления</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username">Никнейм</Label>
              <Input
                id="username"
                placeholder="Введите никнейм"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Пароль</Label>
              <Input
                id="password"
                type="password"
                placeholder="Введите пароль"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
              />
            </div>
            {loginError && (
              <div className="text-destructive text-sm text-center">{loginError}</div>
            )}
            <Button className="w-full phoenix-glow" onClick={handleLogin}>
              <Icon name="LogIn" size={16} className="mr-2" />
              Войти в панель
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Admin Header */}
      <header className="bg-card border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <Icon name="Shield" size={20} className="text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-xl font-bold">Админ-панель</h1>
                <p className="text-sm text-muted-foreground">Phoenix Mobile RP</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Avatar className="w-8 h-8">
                  <AvatarFallback className="bg-primary text-primary-foreground text-xs">
                    FM
                  </AvatarFallback>
                </Avatar>
                <span className="text-sm font-medium">Finn_Maestrovich</span>
              </div>
              <Button variant="outline" size="sm" onClick={() => setIsLoggedIn(false)}>
                <Icon name="LogOut" size={16} className="mr-2" />
                Выйти
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <Tabs defaultValue="dashboard" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="dashboard">
              <Icon name="BarChart3" size={16} className="mr-2" />
              Дашборд
            </TabsTrigger>
            <TabsTrigger value="users">
              <Icon name="Users" size={16} className="mr-2" />
              Пользователи
            </TabsTrigger>
            <TabsTrigger value="forum">
              <Icon name="MessageSquare" size={16} className="mr-2" />
              Форум
            </TabsTrigger>
            <TabsTrigger value="reports">
              <Icon name="AlertTriangle" size={16} className="mr-2" />
              Жалобы
            </TabsTrigger>
            <TabsTrigger value="settings">
              <Icon name="Settings" size={16} className="mr-2" />
              Настройки
            </TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard" className="space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Всего пользователей</CardTitle>
                  <Icon name="Users" size={16} className="text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{forumStats.totalUsers.toLocaleString()}</div>
                  <p className="text-xs text-muted-foreground">
                    +{forumStats.todayRegistrations} за сегодня
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Онлайн сейчас</CardTitle>
                  <Icon name="Activity" size={16} className="text-green-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-green-500">{forumStats.onlineUsers}</div>
                  <p className="text-xs text-muted-foreground">
                    Пиковый онлайн: 245
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Всего сообщений</CardTitle>
                  <Icon name="MessageCircle" size={16} className="text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{forumStats.totalPosts.toLocaleString()}</div>
                  <p className="text-xs text-muted-foreground">
                    +{forumStats.todayPosts} за сегодня
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Recent Activity */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Последние пользователи</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentUsers.map((user, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <Avatar className="w-8 h-8">
                            <AvatarFallback className="text-xs">
                              {user.name.slice(0, 2).toUpperCase()}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium text-sm">{user.name}</p>
                            <p className="text-xs text-muted-foreground">{user.role}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="text-xs text-muted-foreground">{user.lastSeen}</span>
                          <div className={`w-2 h-2 rounded-full ${
                            user.status === 'online' ? 'bg-green-500' : 
                            user.status === 'away' ? 'bg-yellow-500' : 'bg-gray-500'
                          }`}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Последние жалобы</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentReports.map((report) => (
                      <div key={report.id} className="flex items-center justify-between p-3 bg-muted/20 rounded-lg">
                        <div>
                          <p className="font-medium text-sm">{report.type}</p>
                          <p className="text-xs text-muted-foreground">
                            {report.reporter} → {report.target}
                          </p>
                        </div>
                        <Badge variant={
                          report.status === "Новый" ? "destructive" :
                          report.status === "В работе" ? "default" : "secondary"
                        }>
                          {report.status}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="users" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Управление пользователями</CardTitle>
                <CardDescription>Поиск и управление аккаунтами игроков</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex space-x-2">
                  <Input placeholder="Поиск по никнейму..." className="flex-1" />
                  <Button>
                    <Icon name="Search" size={16} />
                  </Button>
                </div>
                <div className="space-y-2">
                  {recentUsers.map((user, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-muted/20 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <Avatar>
                          <AvatarFallback>{user.name.slice(0, 2).toUpperCase()}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">{user.name}</p>
                          <p className="text-sm text-muted-foreground">{user.role}</p>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          <Icon name="Edit" size={14} className="mr-1" />
                          Редактировать
                        </Button>
                        <Button variant="outline" size="sm">
                          <Icon name="Ban" size={14} className="mr-1" />
                          Забанить
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="forum" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Управление разделами</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button className="w-full">
                    <Icon name="Plus" size={16} className="mr-2" />
                    Создать новый раздел
                  </Button>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-3 bg-muted/20 rounded-lg">
                      <span>🏠 Главная страница форума</span>
                      <Button variant="ghost" size="sm">
                        <Icon name="Settings" size={14} />
                      </Button>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-muted/20 rounded-lg">
                      <span>📝 Регистрация новых игроков</span>
                      <Button variant="ghost" size="sm">
                        <Icon name="Settings" size={14} />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Модерация сообщений</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="p-3 bg-muted/20 rounded-lg">
                      <p className="font-medium text-sm">Подозрительное сообщение</p>
                      <p className="text-xs text-muted-foreground">от SpamUser</p>
                      <div className="flex space-x-2 mt-2">
                        <Button variant="outline" size="sm">Одобрить</Button>
                        <Button variant="destructive" size="sm">Удалить</Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="reports" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Система жалоб</CardTitle>
                <CardDescription>Рассмотрение жалоб от игроков</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentReports.map((report) => (
                    <div key={report.id} className="p-4 bg-muted/20 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium">Жалоба #{report.id}: {report.type}</h4>
                        <Badge variant={
                          report.status === "Новый" ? "destructive" :
                          report.status === "В работе" ? "default" : "secondary"
                        }>
                          {report.status}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">
                        Пользователь <strong>{report.reporter}</strong> пожаловался на <strong>{report.target}</strong>
                      </p>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">Рассмотреть</Button>
                        <Button variant="destructive" size="sm">Принять меры</Button>
                        <Button variant="ghost" size="sm">Отклонить</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Настройки сервера</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="maintenance">Режим обслуживания</Label>
                    <Switch id="maintenance" />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="registration">Регистрация открыта</Label>
                    <Switch id="registration" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="chat">Глобальный чат</Label>
                    <Switch id="chat" defaultChecked />
                  </div>
                  <Separator />
                  <div className="space-y-2">
                    <Label>Максимум игроков онлайн</Label>
                    <Input type="number" defaultValue="200" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Настройки форума</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="posts">Премодерация сообщений</Label>
                    <Switch id="posts" />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="avatars">Загрузка аватаров</Label>
                    <Switch id="avatars" defaultChecked />
                  </div>
                  <Separator />
                  <div className="space-y-2">
                    <Label>Сообщений на страницу</Label>
                    <Input type="number" defaultValue="20" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;