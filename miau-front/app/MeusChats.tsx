import { Layout, Text } from "@ui-kitten/components";
import React from "react";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useSession } from "@/services/auth";
import { getChatsByUser } from "@/services/chatservice";

export const MeusChats = () => {
  const user = useSession().user;
  const navigation = useNavigation<any>();

  const [chats, setChats] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchChats = async () => {
      setLoading(true);
      const response = await getChatsByUser(user.uid);
      setChats(response);
      setLoading(false);
    };
    fetchChats();
  }, []);

  if (loading) {
    return (
      <Layout>
        <Text>Loading...</Text>
      </Layout>
    );
  }

  return (
    <Layout>
      <Text>Meus Chats</Text>
      {/* Render your chats here */}
    </Layout>
  );
};
