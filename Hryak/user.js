public void onUpdateReceived(Update u) {

List<User> users = u.getMessage().getNewChatMembers();

 String UserNamn = new User().getFirstName();
