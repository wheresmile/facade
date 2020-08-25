
from fabric import task


@task
def deploy(c):
  c.put('build.zip', '/home/ubuntu')
  # c.run('ls -al')
  c.sudo('mv /home/ubuntu/build.zip /var/www')
  c.sudo('tar -C /var/www -xf /var/www/build.zip')
  c.sudo('rm -rf /var/www/wansimei_b')
  c.sudo('mv /var/www/wansimei /var/www/wansimei_b')
  c.sudo('mv /var/www/build /var/www/wansimei')
  c.sudo('systemctl reload nginx.service')



