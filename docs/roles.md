# Roles

ZForum will expect at least 2 roles to exist, being ID 1 for the default user type, and 2 for the restricted user type. You can generate these roles by 
running `php artisan zforum:make-default-roles`. You can also run it with the option `--all` to generate all default roles, which is recommended.

## user role

The user role by default can create posts and comments, but not run any moderation actions such as deleting other users posts. Below is a representation of the default user role configuration as a JavaScript object.

```js
{
    id: 1,
    name: "user",
    can_create_posts: true,
    can_delete_posts: false,
    can_update_posts: false,
    can_create_comments: true,
    can_ban_users: false,
    can_delete_users: false,
    can_send_messages: true,
    can_report_content: true,
    can_view_reports: false
}
```

## restricted user role

