"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Users, CheckCircle, XCircle, Mail, DollarSign, Eye, Settings, Bell } from "lucide-react"

// Mock data - replace with actual database queries
const pendingAssociations = [
  {
    id: "1",
    name: "New Hope Foundation",
    email: "contact@newhope.org",
    category: "social",
    city: "Boston",
    submittedAt: "2024-01-15",
    status: "pending",
  },
  {
    id: "2",
    name: "Tech Education Initiative",
    email: "info@techedu.org",
    category: "education",
    city: "San Francisco",
    submittedAt: "2024-01-14",
    status: "pending",
  },
]

const approvedAssociations = [
  {
    id: "3",
    name: "Clean Water Initiative",
    email: "contact@cleanwater.org",
    category: "social",
    city: "New York",
    approvedAt: "2024-01-10",
    status: "approved",
    subscriptionStatus: "active",
  },
  {
    id: "4",
    name: "Youth Sports Academy",
    email: "info@youthsports.org",
    category: "sports",
    city: "Los Angeles",
    approvedAt: "2024-01-08",
    status: "approved",
    subscriptionStatus: "active",
  },
]

interface AdminDashboardProps {
  onLogout?: () => void
}

export function AdminDashboard({ onLogout }: AdminDashboardProps) {
  const [selectedTab, setSelectedTab] = useState("overview")
  const [adminData, setAdminData] = useState({
    pending: [],
    stats: { total: 0, pending: 0, approved: 0 },
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchAdminData = async () => {
      try {
        const response = await fetch("/api/admin/associations")
        const data = await response.json()
        setAdminData(data)
      } catch (error) {
        console.error("Error fetching admin data:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchAdminData()
  }, [])

  const handleApprove = async (associationId: string) => {
    try {
      const response = await fetch(`/api/admin/associations/${associationId}/approve`, {
        method: "POST",
      })

      if (response.ok) {
        // Refresh data
        window.location.reload()
      }
    } catch (error) {
      console.error("Error approving association:", error)
    }
  }

  const handleReject = async (associationId: string) => {
    try {
      const response = await fetch(`/api/admin/associations/${associationId}/reject`, {
        method: "POST",
      })

      if (response.ok) {
        // Refresh data
        window.location.reload()
      }
    } catch (error) {
      console.error("Error rejecting association:", error)
    }
  }

  const handleSendNotification = () => {
    // Implement notification sending
    console.log("Sending notification")
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Admin Dashboard</h1>
          <p className="text-gray-600">Manage associations, subscriptions, and platform settings</p>
        </div>
        {onLogout && (
          <Button variant="outline" onClick={onLogout}>
            Logout
          </Button>
        )}
      </div>

      <Tabs value={selectedTab} onValueChange={setSelectedTab} className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="associations">Associations</TabsTrigger>
          <TabsTrigger value="subscriptions">Subscriptions</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Associations</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">524</div>
                <p className="text-xs text-muted-foreground">+12% from last month</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Pending Approval</CardTitle>
                <CheckCircle className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{pendingAssociations.length}</div>
                <p className="text-xs text-muted-foreground">Requires attention</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Monthly Revenue</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$4,380</div>
                <p className="text-xs text-muted-foreground">+8% from last month</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Subscriptions</CardTitle>
                <Settings className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">438</div>
                <p className="text-xs text-muted-foreground">98.4% retention rate</p>
              </CardContent>
            </Card>
          </div>

          {/* Recent Activity */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">New association approved</p>
                    <p className="text-xs text-gray-500">Clean Water Initiative - 2 hours ago</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">Subscription renewed</p>
                    <p className="text-xs text-gray-500">Youth Sports Academy - 4 hours ago</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">New application submitted</p>
                    <p className="text-xs text-gray-500">Tech Education Initiative - 6 hours ago</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="associations" className="space-y-6">
          {/* Pending Approvals */}
          <Card>
            <CardHeader>
              <CardTitle>Pending Approvals ({pendingAssociations.length})</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {pendingAssociations.map((association) => (
                  <div key={association.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex-1">
                      <h3 className="font-semibold">{association.name}</h3>
                      <p className="text-sm text-gray-600">{association.email}</p>
                      <div className="flex items-center space-x-4 mt-2">
                        <Badge variant="outline">{association.category}</Badge>
                        <span className="text-sm text-gray-500">{association.city}</span>
                        <span className="text-sm text-gray-500">Submitted: {association.submittedAt}</span>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline">
                        <Eye className="h-4 w-4 mr-1" />
                        View
                      </Button>
                      <Button size="sm" onClick={() => handleApprove(association.id)}>
                        <CheckCircle className="h-4 w-4 mr-1" />
                        Approve
                      </Button>
                      <Button size="sm" variant="destructive" onClick={() => handleReject(association.id)}>
                        <XCircle className="h-4 w-4 mr-1" />
                        Reject
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Approved Associations */}
          <Card>
            <CardHeader>
              <CardTitle>Approved Associations</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {approvedAssociations.map((association) => (
                  <div key={association.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex-1">
                      <h3 className="font-semibold">{association.name}</h3>
                      <p className="text-sm text-gray-600">{association.email}</p>
                      <div className="flex items-center space-x-4 mt-2">
                        <Badge variant="outline">{association.category}</Badge>
                        <span className="text-sm text-gray-500">{association.city}</span>
                        <Badge className="bg-green-100 text-green-800">{association.subscriptionStatus}</Badge>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline">
                        <Eye className="h-4 w-4 mr-1" />
                        View
                      </Button>
                      <Button size="sm" variant="outline">
                        <Settings className="h-4 w-4 mr-1" />
                        Manage
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="subscriptions" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Subscription Management</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center p-4 border rounded-lg">
                    <div className="text-2xl font-bold text-green-600">438</div>
                    <div className="text-sm text-gray-600">Active Subscriptions</div>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <div className="text-2xl font-bold text-orange-600">12</div>
                    <div className="text-sm text-gray-600">Expiring Soon</div>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <div className="text-2xl font-bold text-red-600">8</div>
                    <div className="text-sm text-gray-600">Overdue</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Send Notifications</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Button onClick={handleSendNotification} className="h-20 flex-col">
                  <Mail className="h-6 w-6 mb-2" />
                  Send Email to All Associations
                </Button>
                <Button onClick={handleSendNotification} variant="outline" className="h-20 flex-col bg-transparent">
                  <Bell className="h-6 w-6 mb-2" />
                  Send Platform Notification
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
